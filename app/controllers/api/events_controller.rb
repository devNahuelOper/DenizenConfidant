class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  # def create
  #   @event = Event.create!(event_params)
  #   render :show
  # end


  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find(params[:id])
    render :show
    # render json: "api/events/:id"
  end

  def edit
    @event = Event.find(params[:id])
    render json: "api/events/:id"
  end

  def update
    @event = Event.find(params[:id])
    if !@event.update(event_params)
      render json: @event.errors.full_messages
    end
      render json: "api/events/:id"
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render json: "api/events/:id"
  end

  private

  def event_params
    params.require(:event).permit(:name, :venue, :location, :date, :headliners, :description, :cost, :local, :photo)
  end

end