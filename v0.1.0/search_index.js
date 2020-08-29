var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = Polylogarithms","category":"page"},{"location":"#Polylogarithms","page":"Home","title":"Polylogarithms","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Polylogarithms]\nPages   = [\"Polylogarithms.jl\", \"polylog.jl\", \"bernoulli_n.jl\", \"bernoulli_poly.jl\", \"harmonic.jl\", \"stieltjes.jl\", \"beta.jl\"]","category":"page"},{"location":"#Polylogarithms.Polylogarithms","page":"Home","title":"Polylogarithms.Polylogarithms","text":"Polylogarithms\n\nModule containing functions to calculate the polylogarithm and associated functions\n\n\n\n\n\n","category":"module"},{"location":"#Polylogarithms.polylog-Tuple{Number,Number,Diagnostics}","page":"Home","title":"Polylogarithms.polylog","text":"polylog(s, z, Diagnostics())\n\nCalculates the Polylogarithm function Li_s(z) defined by\n\nLi_s = sum_n=1^infty fracz^nn^s\n\nUses double precision complex numbers (not arbitrary precision). It's goal is an relative error bound 10^{-12}.\n\nInput Arguments\n\ns Complex: the 'fractional' parameter\nz ::Complex: the point at which to calculate it\n::Diagnostics: use this to indicate that the output should include extra information\n\nIt should also accept input arguments as Real or Rational or Integer but these aren't completely tested.\n\nThere are additional keywords, but these are currently intended for testing not use.\n\nOutput Arguments\n\nLi_s(z): The result\nn:       The number of elements used in each series\nseries:    The series used to compute results (4 = reciprocal)\n\nExamples\n\njulia> polylog(0.35, 0.2, Diagnostics() )\n(0.23803890574407033, 17, 1)\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.polylog-Tuple{Number,Number}","page":"Home","title":"Polylogarithms.polylog","text":"polylog(s, z)\n\nCalculates the Polylogarithm function Li_s(z) defined by\n\nLi_s = sum_n=1^infty fracz^nn^s\n\nUses double precision complex numbers (not arbitrary precision). It's goal is an relative error bound 10^{-12}.\n\nInput Arguments\n\ns ::Complex: the 'fractional' parameter\nz ::Complex: the point at which to calculate it\n\nIt should also accept input arguments as Real or Rational or Integer but these aren't completely tested.\n\nThere are additional keywords, but these are currently intended for testing not use.\n\nOutput Arguments\n\nLi_s(z): The result\n\nExamples\n\njulia> polylog(0.35, 0.2)\n0.23803890574407033\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.bernoulli-Tuple{Integer}","page":"Home","title":"Polylogarithms.bernoulli","text":"bernoulli(n)\n\nCalculates the first 35 Bernoulli numbers B_n  (of the first-kind or NIST type)   e.g., see\n\nhttp://mathworld.wolfram.com/BernoulliNumber.html\nhttps://en.wikipedia.org/wiki/Bernoulli_number\nhttp://dlmf.nist.gov/24\n\nN.B. Bernoulli numbers of second kind only seem to differ in that B_1 = + 12 (instead of -1/2)\n\nArguments\n\nn ::Integer: the index into the series, n=012335 (for larger n use bernoulli(n,0.0) )\n\nWe only provide the 1st 36 values as beyond this, we can't  return Int64 rationals, so best to compute the real approximation  using bernoulli(n,0.0). \n\nOdd values for n1 are all zero.\n\nExamples\n\njulia> bernoulli(6)\n1//42\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.bernoulli-Tuple{Integer,Real}","page":"Home","title":"Polylogarithms.bernoulli","text":"bernoulli(n, x)\n\nCalculates Bernoulli polynomials B_n(x)  e.g., see\n\nhttps://en.wikipedia.org/wiki/Bernoulli_polynomials\nhttp://dlmf.nist.gov/24\n\nArguments\n\nn ::Integer: the index into the series, n=0123\nx ::Real: the point at which to calculate the polynomial\n\nExamples\n\njulia> bernoulli(6, 1.2)\n0.008833523809524735\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.harmonic-Tuple{Integer,Integer}","page":"Home","title":"Polylogarithms.harmonic","text":"harmonic(n::Integer,r::Integer)\n\nCalculates generalized harmonic numbers    e.g., see http://mathworld.wolfram.com/HarmonicNumber.html  using a better approach which works when both inputs are integers  https://carma.newcastle.edu.au/resources/jon/Preprints/Papers/Published-InPress/Oscillatory%20(Tapas%20II)/Papers/coffey-zeta.pdf, p.341\n\nArguments\n\nn ::Integer: non-negative index 1 of the Harmonic number to calculate\nr ::Integer: index 2 of the Harmonic number to calculate\n\nExamples\n\njulia> harmonic(2,1)\n1.5000000000000002\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.harmonic-Tuple{Integer,Real}","page":"Home","title":"Polylogarithms.harmonic","text":"harmonic(n::Integer,r::Real)\n\nCalculates generalized harmonic numbers,     e.g., see http://mathworld.wolfram.com/HarmonicNumber.html\n\nArguments\n\nn ::Integer: non-negative index 1 of the Harmonic number to calculate\nr ::Real: index 2 of the Harmonic number to calculate\n\nIt should be possible to extend this to complex r, but that requires more testing.\n\nExamples\n\njulia> harmonic(2,1.5)\n1.3535533905932737\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.harmonic-Tuple{Integer}","page":"Home","title":"Polylogarithms.harmonic","text":"harmonic(n::Integer)\n\nCalculates harmonic numbers,    e.g., see http://mathworld.wolfram.com/HarmonicNumber.html\n\nArguments\n\nn ::Integer: non-negative index of the Harmonic number to calculate\n\nExamples\n\njulia> harmonic(2)\n1.5\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.harmonic-Tuple{Union{Complex{Float64}, Float64}}","page":"Home","title":"Polylogarithms.harmonic","text":"harmonic(x::ComplexOrReal{Float64})\n\nCalculates harmonic numbers extended to non-integer arguments using the  digamma form.\n\nArguments\n\nx ::ComplexOrReal{Float64}: index of the Harmonic number to calculate\n\nExamples\n\njulia> harmonic(2.0)\n1.5000000000000016\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.stieltjes-Tuple{Integer}","page":"Home","title":"Polylogarithms.stieltjes","text":"stieltjes(n)\n\nProvides the first 10 Stieltjes (generalized Euler-Mascheroni) constants (see  Abramowitz and Stegunm, 23.2.5) or https://en.wikipedia.org/wiki/Stieltjes_constants.\n\nThere is a table at \"The Generalized Euler-Mascheroni Constants\", O.R. Ainsworth and L.W.Howell  NASA Technical Paper 2264, Jan 1984  https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19840007812.pdf  but the OEIS has more accurate values, which will be useful when I get around to   bit float versions of the code.\n\nNote that stieltjes(0) = γ, the Euler–Mascheroni constant, also called just Euler's constant.   https://en.wikipedia.org/wiki/Euler-Mascheroni_constant\n\nArguments\n\nn::Integer: the number of elements to compute.\n\nExamples\n\njulia> stieltjes(0)\n0.5772156649015329\n\n\n\n\n\n","category":"method"},{"location":"#Polylogarithms.dirichlet_beta-Tuple{Number}","page":"Home","title":"Polylogarithms.dirichlet_beta","text":"dirichlet_beta()\n\nCalculates Dirichlet beta function,      https://en.wikipedia.org/wiki/Dirichletbetafunction\n\nArguments\n\ns ::Number: it should work for any type of number, but mainly tested for Complex{Float64}\n\nExamples\n\njulia> dirichlet_beta(1.5)\n0.8645026534612017\n\n\n\n\n\n","category":"method"}]
}
