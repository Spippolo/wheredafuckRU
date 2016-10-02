defmodule WheredafuckruApi.Router do
  use WheredafuckruApi.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", WheredafuckruApi do
    pipe_through :api
  end
end
