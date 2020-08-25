class Api::NewsController < ApplicationController

  def index
    @newss = News.all
    render :index
  end

  def show
    @news = News.find(params[:id])
    render :show
  end

  private

  def news_params
    params.require(:news).permit(:title, :blurb, :author, :category, :body, :photo)
  end
end