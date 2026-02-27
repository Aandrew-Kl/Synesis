const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Synesis Strategic Advisors",
  address: "Αγίων Πάντων 1, 1ος όροφος, 49131, Κέρκυρα",
  telephone: "+30 26610 25394",
  email: "synesis_mch@aol.com",
  url: "https://www.esynesis.eu",
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
