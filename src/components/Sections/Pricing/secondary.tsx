import { Fragment } from 'react'
import { CheckIcon, ChevronDownIcon, MinusIcon } from '@heroicons/react/20/solid'

const tiers = [
  { name: 'Starter', href: '#', priceMonthly: 10, description: 'Quis suspendisse ut fermentum neque vivamus non tellus.' },
  {
    name: 'Business',
    href: '#',
    priceMonthly: 25,
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
  }
]
const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Molestie lobortis massa.', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Urna purus felis.', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Tellus pulvinar sit dictum.', tiers: { Essential: true, Premium: true } },
      { name: 'Convallis.', tiers: { Essential: 'Up to 20 users', Premium: 'Up to 50 users' } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Adipiscing.', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Eget risus integer.', tiers: { Essential: true, Premium: true } },
      { name: 'Gravida leo urna velit.', tiers: { Premium: true } },
      { name: 'Elementum ut dapibus mi feugiat cras nisl.', tiers: { Premium: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: 'Sit dignissim.', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Congue at nibh et.', tiers: { Essential: true, Premium: true } },
      { name: 'Volutpat feugiat mattis.', tiers: { Essential: true, Premium: true } },
      { name: 'Tristique pellentesque ornare diam sapien.', tiers: { Premium: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const TablePricing = () => {

  return <div className='pb-16'>
    <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-6xl lg:px-8">
      <div className="px-0 sm:px-4 lg:flex lg:items-center lg:justify-between lg:px-0">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-5xl">Pricing</h2>
          <p className="mt-5 text-lg text-zinc-600">
            Straight forward pricing with no submission limits on any plan.
          </p>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-2xl bg-white py-12 pb-24 sm:px-6 lg:max-w-6xl lg:px-8">
      {/* xs to lg */}
      <div className="space-y-24 lg:hidden">
        {tiers.map((tier) => (
          <section key={tier.name}>
            <div className="mb-8 px-4">
              <h2 className="text-lg font-medium leading-6 text-zinc-900">{tier.name}</h2>
              <p className="mt-4">
                <span className="text-4xl font-extrabold tracking-tight text-zinc-900">${tier.priceMonthly}</span>
                <span className="text-sm font-bold tracking-tight text-zinc-500">per user /mo</span>
              </p>
              <p className="mt-4 text-sm text-zinc-600">{tier.description}</p>
              <button
                className="mt-3 w-full rounded-md border-zinc-800 hover:border-zinc-900 border-transparent px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Get started
              </button>
            </div>

            {sections.map((section) => (
              <table key={section.name} className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 py-3 px-4 text-left text-sm font-medium text-zinc-900">
                  {section.name}
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {section.features.map((feature) => (
                    <tr key={feature.name} className="border-t border-gray-200">
                      <th className="py-5 px-4 text-left text-sm font-normal text-zinc-600" scope="row">
                        {feature.name}
                      </th>
                      <td className="py-5 pr-4">
                        {typeof feature.tiers[tier.name] === 'string' ? (
                          <span className="block text-right text-sm text-zinc-600">{feature.tiers[tier.name]}</span>
                        ) : (
                          <>
                            {feature.tiers[tier.name] === true ? (
                              <CheckIcon className="ml-auto h-5 w-5 text-green-500" aria-hidden="true" />
                            ) : (
                              <MinusIcon className="ml-auto h-5 w-5 text-zinc-400" aria-hidden="true" />
                            )}

                            <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}

            <div className="border-t border-gray-200 px-4 pt-5">
              <button
                className="mt-3 w-full rounded-md border border-transparent bg-gray-800 hover:bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Get started
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* lg+ */}
      <div className="hidden lg:block">
        <table className="h-px w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th className="pb-4 pl-6 pr-6 text-left text-sm font-medium text-zinc-900" scope="col">
                <span className="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier.name}
                  className="w-1/4 px-6 pb-4 text-left text-lg font-medium leading-6 text-zinc-900"
                  scope="col"
                >
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-t border-gray-200">
            <tr>
              <th className="py-8 pl-6 pr-6 text-left align-top text-sm font-medium text-zinc-900" scope="row">
                Pricing
              </th>
              {tiers.map((tier) => (
                <td key={tier.name} className="h-full py-8 px-6 align-top">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p>
                        <span className="text-4xl font-extrabold tracking-tight text-zinc-900">${tier.priceMonthly}</span>
                        <span className="text-sm font-bold tracking-tight text-zinc-500"> per user /mo</span>
                      </p>
                      <p className="mt-4 text-sm text-zinc-600">{tier.description}</p>
                    </div>
                    <button
                      className="mt-3 w-full rounded-md border border-transparent bg-gray-800 hover:bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                    >
                      Get started
                    </button>
                  </div>
                </td>
              ))}
            </tr>
            {sections.map((section) => (
              <Fragment key={section.name}>
                <tr>
                  <th
                    className="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-zinc-900"
                    colSpan={4}
                    scope="colgroup"
                  >
                    {section.name}
                  </th>
                </tr>
                {section.features.map((feature) => (
                  <tr key={feature.name}>
                    <th className="py-5 pl-6 pr-6 text-left text-sm font-normal text-zinc-600" scope="row">
                      {feature.name}
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.name} className="py-5 px-6">
                        {typeof feature.tiers[tier.name] === 'string' ? (
                          <span className="block text-sm text-zinc-600">{feature.tiers[tier.name]}</span>
                        ) : (
                          <>
                            {feature.tiers[tier.name] === true ? (
                              <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                            ) : (
                              <MinusIcon className="h-5 w-5 text-zinc-400" aria-hidden="true" />
                            )}

                            <span className="sr-only">
                              {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                            </span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-200">
              <th className="sr-only" scope="row">
                Choose your plan
              </th>
              {tiers.map((tier) => (
                <td key={tier.name} className="pt-5">
                  <button
                    className="mt-3 w-full rounded-md border border-transparent bg-gray-800 hover:bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                  >
                    Get started
                  </button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>

}