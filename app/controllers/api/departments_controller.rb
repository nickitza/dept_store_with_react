class Api::DepartmentsController < ApplicationController
  before_action :set_dept, only: [:show, :update, :destroy]

  def index
    render json: Department.all
  end

  def show
    render: json: @department
  end

  def create
    department = Department.new(dept_params)
    if department.save
      render json: department
    else 
      render json: department.errors, status: 422
    end
  end

  def update
    if @department.update(dept_params)
    render json: @department
    else
      render json: department.errors, status: 422
    end
  end

  def destroy
    @department.destroy
  end


  private
  def set_dept
    @department = Department.find(params[:id])
  end

  def dept_params
    params.require(:department).permit(:name)
  end

end
