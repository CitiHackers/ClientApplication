import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
// 1. Initialize
const app = dva({
    initialState:{
        estateData:{
            estateList:[],
            selectedEstates:[]
        }
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
app.model(require('./models/profile').default);
app.model(require('./models/estateData').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
