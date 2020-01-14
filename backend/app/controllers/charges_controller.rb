class ChargesController < ApplicationController

  Stripe.api_key = ENV['STRIPE_SECRET_KEY']

  def create
  
    order = Order.find(params[:orderId])
    amount = order.shoes.sum(:cost) * 100

    puts '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'
    puts amount

    charge = Stripe::Charge.create(
      # :customer => customer.id,
      :amount => amount,
      :description => 'OG Store',
      :currency => 'usd',
      :source => params[:token]
    )

  rescue Stripe::CardError => e 
    flash[:errors] = e.message
    redirect_to charges_path
  end

end
