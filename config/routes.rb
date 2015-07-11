Rails.application.routes.draw do

  get "/ajax", to: "ajax#load", as: "ajax", defaults: {format: :js}

  resources :users, only: [:index, :show], path: "/users"

  resources :jobs, only: :index

  resources :static_pages, only: :index, path: "/:action", as: :action
  get "/dashboard", to: "static_pages#dashboard", as: :home

  root 'static_pages#login'
end
