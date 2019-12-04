class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end 

    def show 
        user =User.find.find(params[:id])
        render json: user
    end 

    def create
        user = User.create(user_params)
        
        if user.valid?
            render json: {token: token(user.id), user_id: user.id}
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def show
        user_id = params[:id]
        if current_user_id == user_id.to_i
          user = User.find(user_id)
          render json: user
        else
          render json: { "You done messed up" }, status: :unauthorized
        end
    end

    # def update
    #     user.update(user_params)
    #     render json: user

    # end 

    private

    def user_params
        params.permit(:username, :password)
    end 

end
