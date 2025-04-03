<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <message />
              </el-icon>Navigator One
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>Navigator Two
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <setting />
              </el-icon>Navigator Three
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header>
        <!-- <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div> -->
        <div class="search">
          <el-row :gutter="20">
            <el-col :span="4">
              <el-form-item label="游戏名称">
                <el-input v-model="searchParams.yxm" placeholder="游戏名称" @change="search" />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="游戏类型">
                <el-select v-model="searchParams.yxlx" placeholder="游戏类型" size="default"
                  :empty-values="[null, undefined]" style="width: 200px">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="游戏标签">
                <el-input v-model="searchParams.yxbq" style="width: 200px" placeholder="游戏标签" @change="search" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="发售日期">
                <el-date-picker v-model="searchParams.fsrq" value-format="YYYY-MM-DD" type="daterange"
                  range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" :size="size" />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="社团">
                <el-input v-model="searchParams.st" style="width: 200px" placeholder="社团" @change="search" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="排序方式">
                <el-select v-model="searchParams.pxfs" multiple placeholder="Select" style="width: 260px">
                  <el-option v-for="item in sortOption" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row justify="end">
            <el-col :span="4">
              <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
              <el-button type="primary" @click="output">导出</el-button>
            </el-col>

          </el-row>

        </div>
      </el-header>

      <el-main>
        <el-button type="primary"
          @click="dialogFormVisible = true; form.id = null; form.yxm = ''; form.yxym = ''; form.yxbh = '';form.bz = ''">新增</el-button>
        <el-button type="danger" @click="dataDelete">删除</el-button>
        <el-scrollbar>
          <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column fixed prop="yxm" label="游戏名" width="300" show-overflow-tooltip />
            <el-table-column prop="yxlx" label="游戏类型" width="120" />
            <el-table-column prop="fms" label="游戏销量" width="120" />
            <el-table-column prop="fsrq" label="发售日期" width="150" />
            <el-table-column prop="flbq" label="游戏标签" width="500" show-overflow-tooltip />
            <el-table-column prop="zplx" label="作品类型" width="200" />
            <el-table-column prop="st" label="社团" width="250" show-overflow-tooltip />
            <el-table-column prop="pf" label="评分" width="80" show-overflow-tooltip />
            <el-table-column prop="pfrs" label="评分人数" width="100" show-overflow-tooltip />
            <el-table-column prop="zcyy" label="支持语言" width="100" show-overflow-tooltip />
            <el-table-column prop="wjdx" label="文件大小" width="100" show-overflow-tooltip />
            <el-table-column prop="cjsj" label="爬取时间" width="120" show-overflow-tooltip />
            <el-table-column prop="yxbh" label="游戏编号" width="120" />
            <el-table-column prop="yxym" label="游戏原名" width="120" show-overflow-tooltip/>
            <el-table-column prop="bz" label="备注" width="100" show-overflow-tooltip />
            <el-table-column fixed="right" prop="rzdz" label="入正地址" width="100">
              <template #default="scope">
                <el-link type="primary" :href="scope.row.rzdz" target="_blank">入正地址</el-link>
              </template>
            </el-table-column>

            <el-table-column fixed="right" label="操作" min-width="120">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="edit(scope.row)">
                  修改
                </el-button>
                <el-button link type="primary" size="small" @click="update(scope.row.yxbh)">更新</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </el-main>

      <el-footer>
        <el-pagination v-model:current-page="searchParams.page" v-model:page-size="searchParams.rows" :page-sizes="page"
          :size="size" :disabled="disabled" :background="background" layout="sizes, prev, pager, next, jumper"
          :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </el-footer>
    </el-container>
  </el-container>

  <el-dialog v-model="dialogFormVisible" title="详情" width="500">
    <el-form :model="form">
      <el-form-item label="游戏名" :label-width="formLabelWidth">
        <el-input v-model="form.yxm" autocomplete="off" />
      </el-form-item>
      <el-form-item label="游戏原名" :label-width="formLabelWidth">
        <el-input v-model="form.yxym" autocomplete="off" />
      </el-form-item>
      <el-form-item label="游戏编号" :label-width="formLabelWidth">
        <el-input v-model="form.yxbh" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="form.bz" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <!-- <el-button @click="dialogFormVisible = false">Cancel</el-button> -->
        <el-button type="primary" @click="save()">
          保存
        </el-button>
        <el-button type="primary" @click="save(); update(form.yxbh)">
          保存并更新
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { Menu as IconMenu, Message, Setting, Search } from '@element-plus/icons-vue'
import { type ComponentSize } from 'element-plus'
import { getGameData, gameDataUpdate, gameDataUpdateByYxbh, gameDataDelete, gameDataOutput } from '@/api/gamedata'
import { successTip } from '@/utils/tip'
import { openSafeUrl } from '@/utils/jump'

const page = [10, 20, 30, 40]
const searchParams = reactive({
  page: 1,
  yxm: '',
  fsrq: '',
  yxlx: '',
  yxbq: '',
  st: '',
  pxfs: "",
  rows: 10,
})
const tableData = ref([])
const total = ref(0)
let seleteData
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)
const handleSizeChange = (val: number) => {
  getData()
}
const handleCurrentChange = (val: number) => {
  getData()

}
const edit = (row) => {
  dialogFormVisible.value = true
  form.id = row.id
  form.yxm = row.yxm
  form.yxym = row.yxym
  form.yxbh = row.yxbh
  form.bz = row.bz

}
const sortOption = [
  {
    value: "fms",
    label: "销量"
  },
  {
    value: "fsrq",
    label: "发售日期"
  },
  {
    value: "pf",
    label: "评分"
  }
]
const options = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'RPG',
    label: 'RPG',
  },
  {
    value: 'RPG',
    label: 'RPG',
  },
  {
    value: 'SLG',
    label: 'SLG',
  },
  {
    value: 'ACT',
    label: 'ACT',
  },
  {
    value: 'ADV',
    label: 'ADV',
  }
]

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  yxm: '',
  yxym: '',
  id: '',
  yxbh: '',
  bz: '',
})
const search = () => {
  getData()
}
function getData() {
  getGameData(searchParams).then((res) => {
    res = res.data
    tableData.value = res.data
    total.value = res.total
    searchParams.page = res.page
  })
}
function save() {
  gameDataUpdate(form).then(res => {
    successTip(res.message)
    getData()
  })
}
function update(yxbh) {
  gameDataUpdateByYxbh({ yxbh: yxbh }).then(
    res => {
      successTip(res.message)
      getData()
    }
  )
}
function dataDelete() {
  gameDataDelete({ ids: seleteData }).then(res => {
    successTip(res.message)
    getData()
  })
}
function output() {
  gameDataOutput({}).then(res => {
    openSafeUrl(res.data.url)
  })
}

function handleSelectionChange(data) {
  seleteData = data.map(x => x.id)
}
onMounted(() => {
  getData()
})
function cutArr(len, num, arr) {
  let r = []
  for (let i = 0 + (num - 1) * len; i < arr.length && r.length < len; i++) {
    r.push(arr[i]);
  }
  return r;
}
</script>

<style scoped>
.el-header {
  height: auto;
}

.search .el-form-item {
  margin-bottom: 0;
}

/* .layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

/* .layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
} */

.el-row .el-col {
  margin: 12px 0 12px 0;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-main {
  overflow: hidden;
  /* 直接禁止滚动 */
}
</style>
