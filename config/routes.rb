Rails.application.routes.draw do

  get "/ajax", to: "ajax#load", as: "ajax", defaults: { format: :js }

  resources :users, only: [:index, :show], path: "/users"

  resources :jobs, only: :index
  get "/job/view", to: "jobs#view", as: :job_view

  resources :static_pages, only: :index, path: "/:action", as: :action
  get "/dashboard", to: "static_pages#dashboard", as: :home

  root 'static_pages#login'
end
