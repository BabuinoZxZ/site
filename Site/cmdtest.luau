local HttpService = game:GetService("HttpService")
local socket = require(script.Parent.Socket)  -- Um módulo que gerencia a conexão com o servidor

local serverURL = "http://localhost:3000"  -- Altere para o endereço do seu servidor

local function executeLua(luaCode)
    local response = HttpService:PostAsync(serverURL .. "/executeLua", luaCode, Enum.HttpContentType.ApplicationJson, false)
    print("Resposta do servidor:", response)
end

-- Exemplo de uso:
local exampleCode = [[
print("Hello, world!")
]]

executeLua(exampleCode)
