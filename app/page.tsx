import Layout from "@/components/layout/Layout"
import Link from "next/link";
import Image from "next/image";
import { db } from "@/data/db";

export default function Home() {
  return (
    <Layout>
      {/* Header*/}
      <header className="bg-dark py-5 bg-image">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Uñas Sanas</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Te cuidamos y embellecemos, priorizando tu bienestar y la prevención de hongos en tus uñas
            </p>
          </div>
        </div>
      </header>
      {/* Section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
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
                        S/{product.price}
                      </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="d-flex gap-4 justify-content-center">
                        <Link className="btn btn-outline-dark mt-auto" href={`/${product.slug}`}>
                          Ver
                        </Link>
                        <Link href={product.wsp} target="_blanck">
                          <button type="button" className="btn btn-success">
                            <Image src="/WhatsApp.svg.webp" alt="WhatsApp Uñas Sanas" width="30" height="30"/>
                          </button>
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
  );
}
