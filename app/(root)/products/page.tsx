import ProductCard from "@/components/ProductCard";
import SearchForm from "@/components/SearchForm";
import { ProductRepository } from "@/lib/typeorm/repositories/productRepository";
import React from "react";


const product = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  // Fetch products from database
  const posts = query 
    ? await ProductRepository.searchProducts(query)
    : await ProductRepository.findAll();
 
  return (
    <>
      <section>
        <div className="flex">
          <SearchForm query={query} />
        </div>
      </section>
      <section className="justify-items-center">
        <p>{query ? `Search result for "${query}"` : "All Products"}</p>
        <ul className="mt-7 card-grid mb-7 ">
          {posts?.length > 0 ? (
            posts.map((post: any, index: number) => (
              <ProductCard key ={post?._id} post={post}/>
            ))
          ) : (
            <p>No Products</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default product;
