class AjaxController < ApplicationController
  def load
    built_path = params[:soft].gsub("_", "/") || "ajax/load"
    hard_path  = params[:hard].gsub("_", "/").gsub("-", "_")
    respond_to do |format|
      format.js { render built_path, layout: false }
    end
  end
end