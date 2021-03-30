class Api::DjsController < ApplicationController

   def create
      @dj = Dj.new(dj_params)
      if @dj.save
        render :show
      else
        render json: @dj.errors.full_messages, status: 422
      end
   end

   def index 
     @djs = Dj.includes(songs_attachments: :blob, track_attachment: :blob, photo_attachment: :blob)
     render :index
   end

   def show
      @dj = Dj.includes(photo_attachment: :blob, songs_attachments: :blob, track_attachment: :blob).find(params[:id])
      render :show
   end

    def update 
      @dj = Dj.find(params[:id])
      @dj.update!(dj_params)
      render :show
    end

   private

   def dj_params
    #  params.require(:dj).permit(:name, :genre, :nationality, :city, :bio, :user_id, :photo, :track, songs: [])
     params.fetch(:dj, {}).permit(:name, :genre, :nationality, :city, :bio, :user_id, :photo, :track, songs: [])
   end
end