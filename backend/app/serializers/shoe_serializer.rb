class ShoeSerializer < ActiveModel::Serializer
  include ActionView::Helpers::NumberHelper
  
  attributes :id, :name , :cost, :image, :brand, :price, :gender
  

  def price
    number_to_currency(self.object.cost)
  end

  def gender
    self.object.category.name
  end 

end
