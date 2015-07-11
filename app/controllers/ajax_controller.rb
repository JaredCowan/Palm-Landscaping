class AjaxController < ApplicationController
  def load
    built_path = params[:soft].gsub("_", "/")
    respond_to do |format|
      format.js { render built_path, layout: false }
    end
  end
end