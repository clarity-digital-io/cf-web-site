import { CheckIcon as CheckIconMini } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Custom Implementation Services',
    bg: 'bg-gray-800',
    href: '#',
    priceMonthly: 12,
    description: 'All the basics for starting a new business',
    features: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
  },
  {
    name: 'Freelancer',
    bg: 'bg-indigo-700',
    href: '#',
    priceMonthly: 24,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  }
]

export default function AdditionalPricing() {
  return <div className='bg-gray-50'>
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 ">
      <div className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
        {tiers.map((tier) => (
          <div key={tier.name} className={`divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm ${tier.bg}`}>
            <div className="p-10">
              <h2 className="text-lg font-medium leading-6 text-gray-50 w-6">{tier.name}</h2>
              <p className="mt-4 text-sm text-white">{tier.description}</p>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>{' '}
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a
                href={tier.href}
                className="mt-8 block w-full rounded-md border border-transparent bg-gray-600 py-2 text-center text-sm font-semibold text-white hover:bg-gray-700"
              >
                Buy {tier.name}
              </a>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">What's included</h3>
              <ul role="list" className="mt-6 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <CheckIconMini className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                    <span className="text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}
