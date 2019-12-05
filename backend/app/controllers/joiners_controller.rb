class JoinersController < ApplicationController
    def create
        joiner = Joiner.create(joiner_params)
        render json: joiner
    end 

    private

    def joiner_params
        params.permit(:shoe_id, :order_id)
    end 
end 