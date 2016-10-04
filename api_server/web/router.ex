defmodule WheredafuckruApi.Router do
  use WheredafuckruApi.Web, :router

  pipeline :api do
      plug CORSPlug, [origin: "http://localhost:8080"]
    plug :accepts, ["json"]
  end

  scope "/api", WheredafuckruApi do
    pipe_through :api
    resources "/positions", PositionController, except: [:new, :edit]
    options   "/positions", ArticleController, :options
    options   "/positions/:id", ArticleController, :options
  end
end
