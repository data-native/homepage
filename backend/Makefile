ARCH = x86_64-unknown-linux-gnu

.PHONY: build
build:
	cross build --release --target $(ARCH)
	rm -rf ./build
	mkdir -p ./build
	cp -v ./target/$(ARCH)/release/backend ./build/bootstrap