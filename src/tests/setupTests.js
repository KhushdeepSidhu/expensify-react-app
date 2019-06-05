import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import dotenv from 'dotenv'

Enzyme.configure ( {
    adapter: new Adapter ()
} )

dotenv.config ( { path: '.env.test' } )