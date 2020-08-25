class Api::NewsController < ApplicationController

  def index
    @djs = Dj.all
    render :index
  end

  def show
    @dj = Dj.find(params[:id])
    render :show
  end

  private

  def news_params
    params.require(:news).permit(:title, :blurb, :author, :category, :body, :photo)
  end
end