import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
import './index.css'
import { HomePage } from './screens/Home/Home.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import PostDetail from './screens/Post/Posts.tsx'

const RootRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>

  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootRoutes />
  </StrictMode>,
)
