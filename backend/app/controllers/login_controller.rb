class LoginController < ApplicationController

    def create
        userm  = User.find_by(username: (params[:username].downcase))

        if user && user.authenticate(params[:password])
          render json: { token: token(user.id), user_id: user.id }
        else 
          render json: { errors: [ "You done messed up!" ] }, status: :unprocessable_entity
        end 
      end    

end 