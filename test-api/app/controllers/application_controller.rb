class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def issue_token(payload)
        JWT.encode(payload, "ES384")
    end
    def authenticate_user
        jwt = cookies.signed[:jwt]
        decode_jwt(jwt)
      end
end
