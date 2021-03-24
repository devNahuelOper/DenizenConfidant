class Api::GenresController < ApplicationController

  def index
    @genres = Genre.includes(:photos_attachments)
    render :index
  end

  def show
    @genre = Genre.find(params[:id])
    render :show
  end

  private

  def genre_params
    params.require(:genre).permit(:name, :origin, :artists, :artist_ids, :description, photos: [])
  end
end
