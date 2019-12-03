class LoginController < ApplicationController
    # def create
    #     current_user = User.find_by(username: params[:session][:username])
    #     if current_user && current_user.authenticate(params[:session][:password])
    #         session[:user_id] = @current_user.id
    #     else
    #         render json: {error: "You done fucked up"}
    #     end 
    # end 

    # def destroy
    #     session.delete(:user_id)
    #     redirect_to login_path
    # end

    def create
        user = User.find_by("lower(username) = ?", params[:username].downcase)
        if user && user.authenticate(params[:password])
          render json: { token: token(user.id), user_id: user.id }
        else 
          render json: { errors: [ "You done messed up!" ] }, status: :unprocessable_entity
        end 
      end    

end 