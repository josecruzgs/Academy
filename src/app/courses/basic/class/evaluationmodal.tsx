import React, { FunctionComponent } from 'react';

interface EvaluationModalProps {
  onClose: () => void; // Especifica el tipo de onClose como una función que no recibe argumentos y devuelve void
}

const EvaluationModal: FunctionComponent<EvaluationModalProps> = ({ onClose }) => {

  return (
    
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black mt-10 bg-opacity-70">
      <div className="modal-container bg-gray-800 w-11/12 md:w-6/12 mx-auto p-4 rounded-xl shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Evaluation Instructions</h2>
        <p className="text-gray-300n mb-4">
          Instructions: Read the question, analyze it, and select the answer that you consider correct. Then press "Next" to advance to the next question.
        </p>

        <section className="px-12">
    <div className="max-w-lg mx-auto relative">

        <input id="article-01" type="radio" name="slider" className="sr-only peer/01"/>
        <input id="article-02" type="radio" name="slider" className="sr-only peer/02"/>
        <input id="article-03" type="radio" name="slider" className="sr-only peer/03" checked/>
        <input id="article-04" type="radio" name="slider" className="sr-only peer/04"/>
        <input id="article-05" type="radio" name="slider" className="sr-only peer/05"/>

        <div className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/01:[&_article]:ring
            peer-focus-visible/01:[&_article]:ring-indigo-300
            peer-checked/01:relative
            peer-checked/01:z-50
            peer-checked/01:translate-x-0
            peer-checked/01:scale-100
            peer-checked/01:[&>label]:pointer-events-none
            peer-checked/02:-translate-x-20
            peer-checked/02:scale-[83.75%]
            peer-checked/02:z-40
            peer-checked/03:-translate-x-40
            peer-checked/03:z-30
            peer-checked/04:-translate-x-40                    
            peer-checked/04:opacity-0
            peer-checked/05:-translate-x-40
        ">
            <label className="absolute inset-0" ><span className="sr-only">Question</span></label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
                <header className="mb-2">
                    <img className="inline-flex rounded-full shadow mb-3" src="/images/avatar.png" width="44" height="44" alt="Icon" />
                    <h1 className="text-xl font-bold text-slate-900">Dogecoin is an example of a…</h1>
                </header>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2 hover:bg-gray-200 cursor-pointer">
                    <p>Fiat currency</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>“Meme coin” or altcoin</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>Stablecoin</p>
                </div>
                <footer className="text-right">
                    <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Next Question</a>
                </footer>
            </article>
        </div>

        <div className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/02:[&_article]:ring
            peer-focus-visible/02:[&_article]:ring-indigo-300                        
            peer-checked/01:translate-x-20
            peer-checked/01:scale-[83.75%]
            peer-checked/01:z-40
            peer-checked/02:relative
            peer-checked/02:z-50
            peer-checked/02:translate-x-0
            peer-checked/02:scale-100
            peer-checked/02:[&>label]:pointer-events-none
            peer-checked/03:-translate-x-20
            peer-checked/03:scale-[83.75%]
            peer-checked/03:z-40
            peer-checked/04:-translate-x-40
            peer-checked/04:z-30
            peer-checked/05:-translate-x-40 
            peer-checked/05:opacity-0
        ">
            <label className="absolute inset-0" ><span className="sr-only">Question</span></label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
                <header className="mb-2">
                    <img className="inline-flex rounded-full shadow mb-3" src="/images/avatar.png" width="44" height="44" alt="Icon" />
                    <h1 className="text-xl font-bold text-slate-900">A blockchain is…</h1>
                </header>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2 hover:bg-gray-200 cursor-pointer">
                    <p>A centralized virtual messaging platform made by crypto users</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>A digital public ledger that is distributed across a network of computers and can be used to record transactions</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>A smart contract</p>
                </div>
                <footer className="text-right">
                    <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Next Question</a>
                </footer>
            </article>
        </div>

        <div className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/03:[&_article]:ring
            peer-focus-visible/03:[&_article]:ring-indigo-300                          
            peer-checked/01:translate-x-40
            peer-checked/01:z-30
            peer-checked/02:translate-x-20
            peer-checked/02:scale-[83.75%]
            peer-checked/02:z-40
            peer-checked/03:relative
            peer-checked/03:z-50
            peer-checked/03:translate-x-0
            peer-checked/03:scale-100
            peer-checked/03:[&>label]:pointer-events-none
            peer-checked/04:-translate-x-20
            peer-checked/04:scale-[83.75%]
            peer-checked/04:z-40
            peer-checked/05:-translate-x-40
            peer-checked/05:z-30                  
        ">
            <label className="absolute inset-0" ><span className="sr-only">Question</span></label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
                <header className="mb-2">
                    <img className="inline-flex rounded-full shadow mb-3" src="/images/avatar.png" width="44" height="44" alt="Icon" />
                    <h1 className="text-xl font-bold text-slate-900">Which of these options most closely describes a stablecoin?</h1>
                </header>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2 hover:bg-gray-200 cursor-pointer">
                    <p>A virtual token that is created and controlled by the U.S. federal government</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>A digital currency whose value is pegged to an underlying asset such as gold or the U.S. dollar</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>A cryptocurrency that can only be used at casinos</p>
                </div>
                <footer className="text-right">
                    <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Next Question</a>
                </footer>
            </article>
        </div>

        <div className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/04:[&_article]:ring
            peer-focus-visible/04:[&_article]:ring-indigo-300                          

            peer-checked/01:translate-x-40 
            peer-checked/01:opacity-0
            
            peer-checked/02:translate-x-40
            peer-checked/02:z-30
            
            peer-checked/03:translate-x-20
            peer-checked/03:scale-[83.75%]
            peer-checked/03:z-40

            peer-checked/04:relative
            peer-checked/04:z-50
            peer-checked/04:translate-x-0
            peer-checked/04:scale-100
            peer-checked/04:[&>label]:pointer-events-none
            
            peer-checked/05:-translate-x-20
            peer-checked/05:scale-[83.75%]
            peer-checked/05:z-40
        ">
             <label className="absolute inset-0" ><span className="sr-only">Question</span></label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
                <header className="mb-2">
                    <img className="inline-flex rounded-full shadow mb-3" src="/images/avatar.png" width="44" height="44" alt="Icon" />
                    <h1 className="text-xl font-bold text-slate-900">A blockchain is…</h1>
                </header>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2 hover:bg-gray-200 cursor-pointer">
                    <p>A centralized virtual messaging platform made by crypto users</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>A digital public ledger that is distributed across a network of computers and can be used to record transactions</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>A smart contract</p>
                </div>
                <footer className="text-right">
                    <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Next Question</a>
                </footer>
            </article>
        </div>  

        <div className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/05:[&_article]:ring
            peer-focus-visible/05:[&_article]:ring-indigo-300                          
            peer-checked/01:translate-x-40 
            peer-checked/02:translate-x-40 
            peer-checked/02:opacity-0
            peer-checked/03:translate-x-40
            peer-checked/03:z-30
            peer-checked/04:translate-x-20
            peer-checked/04:scale-[83.75%]
            peer-checked/04:z-40
            peer-checked/05:relative
            peer-checked/05:z-50
            peer-checked/05:translate-x-0
            peer-checked/05:scale-100
            peer-checked/05:[&>label]:pointer-events-none
        ">
             <label className="absolute inset-0" ><span className="sr-only">Question</span></label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
                <header className="mb-2">
                    <img className="inline-flex rounded-full shadow mb-3" src="/images/avatar.png" width="44" height="44" alt="Icon" />
                    <h1 className="text-xl font-bold text-slate-900">Dogecoin is an example of a…</h1>
                </header>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2 hover:bg-gray-200 cursor-pointer">
                    <p>Fiat currency</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>“Meme coin” or altcoin</p>
                </div>
                <div className="text-sm leading-relaxed text-slate-500 bg-gray-100 rounded-lg my-1space-y-4 mb-2  hover:bg-gray-200 cursor-pointer">
                    <p>Stablecoin</p>
                </div>
                <footer className="text-right">
                    <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Next Question</a>
                </footer>
            </article>
        </div>                  
    </div>
</section>


        <button
          className="bg-purple-700 text-white p-2 rounded-md mt-4 w-20"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EvaluationModal;
