use crate::{domain, store, Product};
use lambda_http::{http::StatusCode, IntoResponse, Request, RequestExt, Response};
use serde_json::json;
use tracing::{error, info, instrument, warn};

type E = Box<dyn std::error::Error + Send + Sync + 'static>;

//Get a Product
#[instrument(skip(store))]
pub async fn get_product(
    store: &dyn store::StoreGet,
    event: Request,
    ) -> Result<impl IntoResponse, E> {
    // Retrieve product ID from event
    // If it does not contain a product ID we return 500 error
    let path_parameters = event.path_parameters();
    let id = match path_parameters.first("id") {
        Some(id) => id,
        None => {
            warn!("Missing 'id' parameter in path");
            return Ok(response(
                    StatusCode::BAD_REQUEST,
                    json!({"message": "Missing 'id' parameter in path"}).to_string(),
                    ));
        }
    }
}
