import { createContext, ReactNode, useContext, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

// 쇼핑카트 컨텍스트 생성 -> 생성시 초기값 객체와 타입 선언
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// 쇼핑카트 프로파이더 프롭스의 타입 정의
type ShoppingCartProviderProps = {
  children: ReactNode
}

// 프롭스로 넘겨줄 쇼핑카트 아이템의 타입 정의
type CartItem = {
  id: number
  quantity: number
}

// 쇼핑카트 컨텍스트의 함수 타입 정의
type ShoppingCartContext = {
  openCart: () => void // 사이드바 오픈
  closeCart: () => void // 사이드바 닫기
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number // 카트에 표시되는 숫자
  cartItems: CartItem[] // 카트 눌렀을 때 나오는 사이드 바에 나오는 아이템 정보
}

// useContext 훅을 사용하여 편하게 context의 값을 가져올 수 있음
// useContext를 호출한 컴포넌트는 context 값이 변경되면 항상 리렌더링 된다
// useContext를 리턴하는 useShoppingCart 함수를 export 하여 어디서든 사용 가능함!
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  )

  // ??
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        // 카트에 현재 아이템이 없는 경우 아이템 추가!
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          // 카트에 아이템이 있는 경우 아이템의 quantity 1 증가
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== item.id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id === id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        openCart,
        closeCart,
        cartItems
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
function useLocalStroeage<T>(arg0: string, arg1: never[]): [any, any] {
  throw new Error('Function not implemented.')
}
