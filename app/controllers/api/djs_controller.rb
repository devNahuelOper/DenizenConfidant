class Api::DjsController < ApplicationController

   def create
      @dj = Dj.new(dj_params)
      if @dj.save
        render json: "api/djs"
      else
        render json: @dj.errors.full_messages
      end
   end

   def index 
     @djs = Dj.all
     render :index
   end

   def show
      @dj = Dj.find(params[:id])
      render :show
   end

   def edit
      @dj = Dj.find(params[:id])
      render json: "api/djs/:id"
   end

   def update
    @dj = Dj.find(params[:id])
    if !@dj.update(dj_params)
      render json: @dj.errors.full_messages
    end
      render json: "api/djs/:id"
   end

   private

   def dj_params
     params.require(:dj).permit(:name, :genre, :nationality, :bio, :photo, :track, songs: [])
   end
end