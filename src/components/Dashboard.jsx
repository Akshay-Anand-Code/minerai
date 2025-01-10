function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* First row - status boxes */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">SENTIMENT</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Sentiment content */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">ACTIVE</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Active content */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">GPU CLUSTER STATUS</CardTitle>
        </CardHeader>
        <CardContent>
          {/* GPU status content */}
        </CardContent>
      </Card>

      {/* Second row - GIF taking up half the screen */}
      <div className="col-span-2">
        <Card>
          <CardContent className="p-0">
            <div className="relative">
              <img 
                src="/monistatus.gif" 
                alt="Monitor Status"
                className="w-full h-auto mix-blend-screen filter brightness-100 contrast-125 saturate-150"
                style={{
                  filter: 'sepia(100%) hue-rotate(70deg) brightness(80%) contrast(150%)'
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard; 