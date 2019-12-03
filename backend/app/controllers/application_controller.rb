class ApplicationController < ActionController::API

    private 
    #TOKEN 

    # def set_current_user
    #     current_user = User.find_by()
    # end 

    # def authorized
    #     if current_user == nil
    #         render json: {"you arent logged in"}
    #     end
    # end 

    def token(user_id)
        payload = { user_id: user_id }
        JWT.encode(payload, hmac_secret, 'HS256')
      end
    
    
      def hmac_secret
        ENV["HMAC_SECRET"]
      end
    
      def client_has_valid_token?
        !!current_user_id
        # if current_user_id.nil?
        #   false
        # else
        #   true
        # end
      end
    
      def current_user_id
        begin
          token = request.headers["Authorization"]
          decoded_array = JWT.decode(token, hmac_secret, true, { algorithm: 'HS256' })
          payload = decoded_array.first
        rescue #JWT::VerificationError
          return nil
        end
        payload["user_id"]
      end

end
