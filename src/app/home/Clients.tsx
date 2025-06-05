const clients = [
  { name: 'Client 1' },
  { name: 'Client 2' },
  { name: 'Client 3' },
  { name: 'Client 4' },
  { name: 'Client 5' },
]

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {clients.map((client, index) => (
            <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-12 w-32 bg-gray-200 flex items-center justify-center rounded">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}