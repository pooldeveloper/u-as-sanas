'use client'
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { db } from "@/data/db";

export default function Page() {

  const pathname = usePathname()
  const slug = pathname.split("/")[1];

  const product = db.filter(product => product.slug === slug)[0]

  if (!product) return null
  return (
    <Layout>
      {/* Product section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top"
                src={`/${product.image}.png`}
                alt={`Imagen de ${product.name}`}
              />
            </div>
            <div className="col-md-6">
              {/* <div className="small mb-1">SKU: BST-498</div> */}
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">{`S/${product.price + 10}`}</span>
                <span>{`S/${product.price}`}</span>
              </div>
              <p className="lead">
                {product.description}
              </p>
              <div className="d-flex">
                {/* <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue={1}
                  style={{ maxWidth: "3rem" }}
                /> */}
                <Link href={product.wsp} target="_blanck">
                  <button type="button" className="btn btn-success">
                    Contactar
                    <Image src="/WhatsApp.svg.webp" alt="WhatsApp Uñas Sanas" width="30" height="30" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related items section*/}
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Más Productos</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              db.map(product => (
                <div key={product.id} className="col mb-5">
                  <div className="card h-100">
                    {/* Product image*/}
                    <img
                      className="card-img-top"
                      src={`/${product.image}.png`}
                      alt={`Imagen de ${product.name}`}
                    />
                    {/* Product details*/}
                    <div className="card-body p-4">
                      <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">{product.name}</h5>
                        {/* Product price*/}
                        <span className="text-muted text-decoration-line-through">{`S/${product.price + 10}`}</span>
                        {`S/${product.price}`}
                      </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Link className="btn btn-outline-dark mt-auto" href={`/${product.slug}`}>
                          Ver producto
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}
