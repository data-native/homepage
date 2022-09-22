use crate::{Error, Product, ProductRange};
use async_trait::async_trait;

mod dynamodb;
mod memory;

pub use dynamodb::DynamoDBStore;
pub use memory::MemoryStore;

pub trait Store: StoreGet + StoreGetAll + StorePut + StoreDelete {} //To be expanded when required
                                                #[async_trait]
pub trait StoreGetAll: Send + Sync {
    async fn all(&self, next: Option<&str>) -> Result<ProductRange, Error>;
}
                                                #[async_trait]
pub trait StoreGet: Send + Sync {
    async fn all(&self, id: &str) -> Result<Product, Error>;
}

                                                #[async_trait]
pub trait StorePut: Send + Sync {
    async fn put(&self, product: &Product> -> Result<(), Error>;
}
                                                #[async_trait]
pub trait StoreDelete: Send + Sync {
    async fn delete(&self, id: &str) -> Result<(), Error>;
}
