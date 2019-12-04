class CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts
    end 

    def show
        cart = Cart.find(params[:id])
        render json: cart
    end 

    def create
        cart = Cart.create(cart_params)
        render json: cart
    end 

    private

    def cart_params
        
    end 
end 