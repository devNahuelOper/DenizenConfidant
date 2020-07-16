Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :events, only: [:create, :index, :show, :destroy, :edit, :update]
    resources :djs, only: [:index, :show, :create, :edit, :update]
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
