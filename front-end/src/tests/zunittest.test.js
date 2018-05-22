// JavaScript

// ===[ Importing Dependencies ]================================
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


// ===[ Testing <App/> ]===============================
// import App from '../App'
//
// describe('<App />', () => {
//
//
//     it('renders correctly', () => {
//         const Wrapper = Enzyme.shallow(<App />)
//         expect.anything(Wrapper)
//     })
// })




// ===[ Testing <StoreManagement/> ]===============================
// import StoreManagement from '../pages/StoreManagement'
//
// describe('<StoreManagement/>', () => {
//     Enzyme.configure({ adapter: new Adapter() })
//
//     it('renders correctly', () => {
//         const Wrapper = Enzyme.shallow(<StoreManagement/>)
//         expect.anything(Wrapper)
//     })
// })

// ===[ Testing <ProductPage/> ]===============================
import ProductPage from '../pages/ProductPage'

describe('Product Page ', () => {
    Enzyme.configure({ adapter: new Adapter() })

    it('renders correctly', () => {
        const Wrapper = Enzyme.shallow(<ProductPage/>)
        expect.anything(Wrapper)
    })
})
