class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:show]


  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    # @events = @user.events
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :fname, :lname, :email, :region, :language, :birthday, :gender, :events)
  end
end
