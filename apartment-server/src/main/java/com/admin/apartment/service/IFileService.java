package com.admin.apartment.service;

import com.admin.apartment.entity.File;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 文件表 服务类
 * </p>
 *
 * @author liangming
 * @since 2019-08-15
 */
public interface IFileService extends IService<File> {

    List<File> listselectByRepairsId(long repairsid);

}
