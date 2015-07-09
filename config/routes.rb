Rails.application.routes.draw do

  resources :users, only: [:index, :show], path: "/users"

  resources :static_pages, only: :index, path: "/:action", as: ":action"
  get "/dashboard", to: "static_pages#dashboard", as: :home

  root 'static_pages#login'
end
