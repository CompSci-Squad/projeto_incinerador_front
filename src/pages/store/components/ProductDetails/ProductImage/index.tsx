interface ProductImageProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ProductImage: React.FC<ProductImageProps> = ({
  disabled,
  onClick,
  children,
}) => {

  return (
    <button
      className={disabled ? '' : 'border border-2 rounded-2xl border-eco_green'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ProductImage
