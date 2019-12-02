class ShoeSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper
  
  attributes :id, :name , :cost, :image, :category, :brand, :price

  def price
    number_to_currency(self.object.cost)
  end

end
