# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string
#  lname           :string
#  region          :string
#  language        :string
#  birthday        :date
#  gender          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#  events          :text             default([]), is an Array
#
class User < ApplicationRecord
  attr_reader :password

  validates :password_digest, :session_token, presence: true
  validates :username, presence: { message: " field is required."}
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :fname, :lname, presence: true
  validates :email, presence: true, confirmation: true
  # validates :email_confirmation, presence: true
  validates :gender, presence: true

  has_many :events, foreign_key: :user_id, class_name: :Event, dependent: :destroy
  has_many :djs, dependent: :destroy

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

  def to_partial_path
    'api/users/user'
  end

end
