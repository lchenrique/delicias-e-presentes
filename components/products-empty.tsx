export function ProductsEmpty() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <PackageSearch className="h-16 w-16 text-muted-foreground" />
      <div className="text-xl font-medium">Nenhum produto encontrado</div>
      <p className="text-center text-muted-foreground">
        Tente ajustar seus filtros ou explore nossas categorias
      </p>
      <Button asChild>
        <Link href="/categories">Explorar Categorias</Link>
      </Button>
    </div>
  );
}