use lambda_http::{service_fn, Request};
use products::{entrypoints::lambda::apigateway::get_product, utils::*};

type E = Box<dyn std::error::Error + Send + Sync + 'static>;

#[tokio::main]
async fn main() -> Result<(), E> {
    //Initialize logger
    setup_tracing();

    // Initialize store
    let store = get_store().await;

    // Run the lambda function
    lambda_http::run(service_fn(|event: Request| get_product(&store, event))).await?;
    Ok(())
}
