class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
      # render json: ['Event Submitted!'], status 200
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

  # def edit
  #   @event = Event.find(params[:id])
  #   render json: "api/events/:id"
  # end

  # def update
  #   @event = Event.find(params[:id])
  #   if @event.update(event_params)
  #     render :show
  #     # render json: "api/events/:id"
  #   else
  #     render json: @event.errors.full_messages, status: 422
  #   end
  # end

  def update 
    @event = Event.find(params[:id])
    @event.update!(event_params)
    render :show
  end

  # def update
  #   @event = current_user.events.find_by(id: params[:event][:user_id])
  #   if @event.update(event_params)
  #     render json: "api/events/:id"
  #   else
  #     render json: @event.errors.full_messages
  #   end
  # end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render json: "api/events/:id"
  end

  private

  def event_params
    params.fetch(:event, {}).permit(:name, :venue, :location, :date, :headliners, :description, :cost, :local, :user_id, :photo)
  end

end