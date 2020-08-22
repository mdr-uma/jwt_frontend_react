class SessionsController < ApplicationController

    def login
        # binding.pry
       user = User.find_by(:username => params[:user][:username])
       if user && user.authenticate(params[:user][:password])
        created_jwt = issue_token({id: user.id})
        cookies.signed[:jwt] = {value: created_jwt, httponly: true, expires: 1.hour.from_now}
        render json: {username: user.username}
       else
        render json: {
            error: "Username or password incorrect"

        }, status: 404
       end
    end


   
end
