class Api::ItemsController < ApplicationController
  before_action :set_item
  befre_action :set_dept, only: [:show, :update, :destroy]

  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end


  private
  def set_item
  end

  def set_dept
  end

end
