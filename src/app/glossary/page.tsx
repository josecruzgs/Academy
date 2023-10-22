import React from 'react';
import Breadcrumb from '../components/breadcrum';

function Glosary() {
  const tableData = [
    {
      term: "Airdrop",
      definition: "Is an event where free NFTs are distributed to an audience. It can be a QR code displayed on a screen so it can be captured on a smartphone, or it can be printed on cards for later access."
    },
    {
      term: "Alpha",
      definition: "Is inside knowledge about and event or company. For example, Information about the acquisition of a company, an initial coin offering or an airdrop."
    },
    {
      term: "Blockchain",
      definition: "Is a shared and decentralized database that functions as a transaction ledger. Decentralized means that management of a blockchain is not controlled by a single entity or government. The records on a blockchain get replicated across a large number of networked computers that continually update each other. As a result, the data on a blockchain lasts forever."
    },
    {
      term: "Burn",
      definition: "Permanently pulls an NFT or crypto coin out of circulation."
    },
    {
      term: "Crypto",
      definition: "Is short for cryptocurrency. By extension, it’s any asset or process that uses cryptography."
    },
    {
      term: "Cryptocurrency",
      definition: "Is a blockchain application that creates a digital currency. Secured by cryptography on a blockchain, they are nearly impossible to counterfeit or double-spend. Individual units of cryptocurrency are called crypto coins. A crypto coin has a known value and can be exchanged for government issued currencies (referred to as fiat money)."
    },
    {
      term: "ERC-20",
      definition: "Is the set of rules governing how tokens behave on the Ethereum blockchain. ERC stands for Ethereum Request for Comments."
    },
    {
      term: "Gas Fee",
      definition: "Is the amount charged for recording a transaction on a blockchain. This may vary depending on a number of factors. They include traffic congestion on the network and the speed with which the parties wish the transaction to clear."
    },
    {
      term: "Layer 2",
      definition: "Describes a platform that provides tools to make creating and trading cryptocurrencies and NFTs easier and cheaper."
    },
    {
      term: "Mining",
      definition: "Is the business of verifying blockchain transactions to earn cryptocurrency.  Since Bitcoin used method and it consumes a lot of energy, it’s in disfavor."
    },
    {
      term: "Proof of stake",
      definition: "Describes a blockchain that rewards miners based on their status in a DAO."
    },
    {
      term: "Proof of work",
      definition: "Is a mining system where solving computationally intensive puzzles validates transactions and creates new blocks on a blockchain. BitCoin uses this system."
    },
    {
      term: "Smart Contract",
      definition: "Contains an executable code that gets triggered when related records get added to the blockchain’s ledger for an NFT. For example, this allows escrow arrangements without the need for an intermediary such as a bank or law firm. The Ethereum blockchain was the first to add such smart contracts. Other blockchains have since adopted Ethereum’s smart contract protocols."
    },
    {
      term: "Staking",
      definition: "Locks tokens on a NFT marketplace platform to earn rewards from the platform and allows artists to earn money while showing their work in the marketplace gallery."
    },
    {
      term: "Token",
      definition: "Refers to the general class of Web 3.0 objects that represents an asset. They include NFTs, cryptocurrencies and social tokens. Owners of tokens can hold, trade or stake them to earn interest. Not all tokens are NFTs; some are fungible."
    },
    {
      term: "Utility",
      definition: "Are the benefits from owning a NFT. They provide the reasons to buy a specific NFT."
    },
  ];

  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { href: "/glossary", text: "Glossary" },
    // { href: "/categoria/subcategoria", text: "Subcategoría" },
    // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
  ];

  return (
    <>
      <div className="antialiased pt-10 relative mt-10 lg:mt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">Glossary</h1>
        <div className="pb-4 md:pb-4">
        <Breadcrumb items={breadcrumbItems} />
        </div>
        
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Term
                </th>
                <th scope="col" className="px-6 py-3">
                  Definition
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index} className="border-b bg-gray-800 border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-slate-100">
                    {item.term}
                  </th>
                  <td className="px-6 py-4 text-slate-300">
                    {item.definition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
    </>
  );
}

export default Glosary;
